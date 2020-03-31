import { Component, OnInit } from '@angular/core';
import { GraficoService } from '../grafico.service';
import { PoChartType, PoPieChartSeries, PoChartGaugeSerie, PoDonutChartSeries } from '@portinari/portinari-ui';


@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {
  graficointerface: Array<any>;
  grafico1: PoChartType = PoChartType.Donut;
  grafico2: PoChartType = PoChartType.Gauge;
  grafico3: PoChartType = PoChartType.Pie;


  constructor(private service: GraficoService) { }

  ngOnInit(){
    this.service.list()
    .subscribe( dados => this.graficointerface = dados);

  }

}
