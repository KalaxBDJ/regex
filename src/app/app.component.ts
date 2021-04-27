import { Component } from '@angular/core';




const expresiones = {
 nombre : /^(([A-Z]|[Ñ])([a-z]|[ñ])+)(([ ]([A-Z]|[Ñ])([a-z]|[ñ])+)?)*([ ](([A-Z]|[Ñ])([a-z]|[ñ])+))$/,
 carnet : /^([1][9]([6][6-9]|[7-9][0-9])|[2][0]([0-1][0-9]|[2][0-1]))([1]|[2])([0]|[2-6])([0-9][0-9][0-9])(([1-2]|[4-6])[0][1]|[3][0][1-2])$/,
 numero : /^[+][5][7][ ]?[3](([0][0|1|2|5|8])|([1][0-9])|([2][0-4])|([7][0])|([5][0-2])|([3][3]))([2-9])([0-9][0-9][0-9][0-9][0-9][0-9])$/,
 dir : /((Calle)[ ](([0-9][0-9]?)|([1][0-1][0-9])|([1][2][0-6]))([a-hA-H]?)([a-hA-H]?)[ ](este|sur)?[ ]?[#][ ]([0-9][0-9]?[0-9]?)([a-hA-H]?)([a-hA-H]?)[ ]?[-][ ]?([0-9][0-9][0-9])[ ]?(apto|int)?[ ]?([0-9][0-9]?[0-9]?[0-9]?)?)|((Carrera)[ ](([0-9][0-9]?)|([1][0-4][0-9])|([1][5][0-8]))[ ]?([a-hA-H]?)([a-hA-H]?)[ ](este|sur)?[ ]?[#][ ]?([0-9][0-9]?[0-9]?)[ ]?([a-hA-H]?)([a-hA-H]?)[ ]?[-][ ]?([0-9][0-9]?[0-9]?)[ ]?(apto|int)?[ ]?([0-9][0-9]?[0-9]?[0-9]?)?)|((Transversal|Circular|Avenida|Diagonal)[ ]([0-9][0-9]?[0-9]?)[ ]?([a-hA-H]?)([a-hA-H]?)[ ]?(este|sur)[ ]?[#][ ]?([0-9][0-9]?[0-9]?)[ ]?([a-hA-H]?)([a-hA-H]?)[ ]?[-][ ]?([0-9][0-9]?[0-9]?)[ ]?(apto|int)?[ ]?([0-9][0-9]?[0-9]?[0-9]?)?)/,
 fijo : /^([+][5][7][ ]?[1-8][1-9][2-9][0-9][0-9][0-9][0-9][0-9])$/
} 
  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valid : boolean = false;
  validC : boolean = false;
  validN : boolean = false;
  validD : boolean = false;
  validF : boolean = false;
  
  nombre : string = '';
  carnet : string = '';
  numero : string= '';
  dir : string= '';
  fijo : string = '';

  

  title = 'expresiones';

  vNombre(){
    
    if(expresiones.nombre.test(this.nombre))
    {
      console.log("Valid");
      this.valid = true;
    }
    else
    {
      console.log("Invalid");
      this.valid = false;
    }
    
  }

  vCarnet(){
    
    if(expresiones.carnet.test(this.carnet))
    {
      console.log("Valid");
      this.validC = true;
    }
    else
    {
      console.log("Invalid");
      this.validC = false;
    }
    
  }

  vNumero(){
    
    if(expresiones.numero.test(this.numero))
    {
      console.log("Valid");
      this.validN = true;
    }
    else
    {
      console.log("Invalid");
      this.validN = false;
    }
    
  }

  vDireccion(){
    
    if(expresiones.dir.test(this.dir))
    {
      console.log("Valid");
      this.validD = true;
    }
    else
    {
      console.log("Invalid");
      this.validD = false;
    }
    
  }

  vFijo(){
    
    if(expresiones.fijo.test(this.fijo))
    {
      console.log("Valid");
      this.validF = true;
    }
    else
    {
      console.log("Invalid");
      this.validF = false;
    }
    
  }

  agregar(e : any)
  {

  }

  
}
