import * as React from "react";
import { Column, ColumnType, ColumnDetailsInfo, ColumnDetailsLinks, ColumnDetailsSocial } from "../../components/footer/footer";
import logoImg from '../../images/navbar/icon.png';

const columnFactory = (): Array<Column> => {
     var columns = new Array<Column>();
     var columnOne = new Column(ColumnType.Info, "Brokerage Info", new ColumnDetailsInfo(logoImg, "1234 test street", "(405) 111-2222"));
     columns.push(columnOne);

     var columnTwoLinks = new Array<ColumnDetailsLinks>();
     var linkOne = new ColumnDetailsLinks("About", "/about");
     columnTwoLinks.push(linkOne);
     var columnTwo = new Column(ColumnType.Links, "About Us", null, columnTwoLinks);
     columns.push(columnTwo);

     var columnThree = new Column(ColumnType.Social, "Connect", null, null, new ColumnDetailsSocial("", "", "https://google.com", ""))
     columns.push(columnThree);

     return columns;
}

export default columnFactory;