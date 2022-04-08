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
