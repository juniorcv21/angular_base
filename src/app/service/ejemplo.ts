//***************************   SERVICE     ************************* */

// --------------->  TS
/* import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ResponseModel } from '@models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SolPlantacionForestalGeometriaService {

  constructor(private http: HttpClient) { }
  base = environment.urlProcesos;
  baseSolPlantacionForestal = `${this.base}api/solPlantacionForestalGeometria`;

  registrarGeometria (params: any){
    return this.http.post<ResponseModel<any>>(`${this.baseSolPlantacionForestal}/registrarSolPlantacionForestalGeometria`, params)
    .pipe(tap({ error: err => console.log(err) }));
  };
  listarGeometria (params: any){
    return this.http.post<ResponseModel<any>>(`${this.baseSolPlantacionForestal}/listarSolPlantacionForestalGeometria`, params)
    .pipe(tap({ error: err => console.log(err) }));
  };
  eliminarGeometriaArchivo(params:any){
    return this.http.post(`${this.baseSolPlantacionForestal}/eliminarSolPlantacionForestalGeometriaArchivo`,params)
    .pipe(tap({ error: err => console.log(err) }));
  }

  obtenerSolPlaForGeometria(params:any){
    return this.http.post(`${this.baseSolPlantacionForestal}/obtenerSolPlantacionForestalGeometria`,params);
  }
}
 */

/************************** DIALOG (ACEPTAR) ****************************** */

// --------------->  HTML
/* <p-dialog header="AVISO"
    [(visible)]="geeks" [modal]="true"
    [draggable]="false" [resizable]="false">

    <p class="p-m-0"> <li class="pi pi-exclamation-triangle"></li>&nbsp;
        La no presentación de subsanaciones dentro del plazo hará considerar el documento de gestión (PMFI/DEMA) como "No presentado" conforme al literal 4 del articulo 136 del TUO de la LGPA ley 27444.
    </p>
    <ng-template pTemplate="footer">
        <p-button icon="pi pi-check"
            (click)="geeks=false" label="Aceptar"
            class="p-button-text">
        </p-button>
    </ng-template>
</p-dialog> */

/************************* CONFIRM DIALOG ( SI | NO)  */
// --------------->  TS
/* constructor(
  private confirmationService: ConfirmationService,
){} */

// --------------->  TS
/* mostrarAviso() {
  this.confirmationService.confirm({
    message: 'La no presentación de subsanaciones dentro del plazo hará considerar el documento de gestión (PMFI/DEMA) como "No presentado" conforme al literal 4 del articulo 136 del TUO de la LGPA ley 27444.',
    icon: 'pi pi-exclamation-triangle',
    acceptLabel: 'Aceptar',
    accept: () => {
      this.ref.close
    },

  });

} */

// --------------->  HTML
/* <p-confirmDialog [style]="{ width: '300px' }" ></p-confirmDialog> */
