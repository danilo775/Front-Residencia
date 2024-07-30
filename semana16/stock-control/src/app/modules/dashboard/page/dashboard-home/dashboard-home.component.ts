import { ProductsDataTransferService } from './../../../../shared/services/products/products-data-transfer.service';
import { GetAllProductsResponse } from './../../../../models/interfaces/products/response/GetAllProductsResponse';
import { MessageService } from 'primeng/api';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ChartData, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: []
})
export class DashboardHomeComponent implements OnInit, OnDestroy {

  public productsList: Array<GetAllProductsResponse> = [];
  private destroy$ = new Subject<void>();

  public productsChartDatas!:ChartData;
  public productCharOptions!: ChartOptions;

  constructor(private productService: ProductsService, private messageService: MessageService, private ProductsDtService: ProductsDataTransferService) { }

  ngOnInit(): void {
    this.getProductsDatas();
  }

  getProductsDatas(): void {
    this.productService.getAllProducts()
    .pipe(takeUntil(this.destroy$))
    .subscribe({
      next: (response) => {
        if (response.length > 0){
          this.productsList = response;
          this.ProductsDtService.setProductsDatas( this.productsList);
          this.setProductsChartConfig();
        }
      },
      error: (error) => {
        console.log(error);
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: error.error.message });
      }
    })
  }

  setProductsChartConfig(): void {
    if (this.productsList.length <= 0) {
        return;
    }

    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.productsChartDatas = {
        labels: this.productsList.map((element) => element.name),
        datasets: [
            {
                label: 'Quantidade',
                backgroundColor: documentStyle.getPropertyValue('--indigo-400'),
                borderColor: documentStyle.getPropertyValue('--indigo-400'),
                hoverBackgroundColor: documentStyle.getPropertyValue('--indigo-500'),
                data: this.productsList.map((element) => element.amount)
            }
        ]
    };

    this.productCharOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500
                    },
                },
                grid: {
                    color: surfaceBorder
                }
            },
            y: {
                ticks: {
                    color: textColorSecondary,
                },
                grid: {
                    color: surfaceBorder
                },
            },
        },
    };
}


  ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
  }
}
