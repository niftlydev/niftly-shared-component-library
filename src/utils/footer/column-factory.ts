import * as React from "react";

import { Column, ColumnType, ColumnDetailsInfo, ColumnDetailsLinks, ColumnDetailsSocial } from "@bit/niftly.shared.footer";





const columnFactory = (footerInfo?, footerLinks?, footerSocial?): Array<Column> => {

     var columns = new Array<Column>();

  

     if (footerInfo !== null){

          footerInfo.forEach(e => {

               columns.push(new Column(ColumnType.Info, "Info", e));

          });

     }



     if (footerLinks !== null){

          var links = new Array<ColumnDetailsLinks>();



          footerLinks.forEach(footerLink => {

               links.push(footerLink);

          });

     

          columns.push(new Column(ColumnType.Links, "Links", null, links));

     }

     

     if (footerSocial !== null){

          footerSocial.forEach(e => {

               columns.push(new Column(ColumnType.Social, "Social", null, null, e));

          });

     }



     return columns;

}



export default columnFactory;