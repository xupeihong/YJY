﻿
$(document).ready(function () {





    $("#btnSubmit").click(function () {
        add();
    })


});
function add() {


    var CID = $("#CID").val();
    var PleaseDate = $("#PleaseDate").val();
    if (PleaseDate == "") {
        alert("请购时间不可为空");
        return;
    }

    var str = document.getElementById("GXInfo").innerHTML;
    if (str == "") {
        alert("请选择商品");
        return;
    }


    var PleaseExplain = $("#PleaseExplain").val();
    var OrderContacts = $("#OrderContacts").val();
    var OrderNumber = $("#OrderNumber").val();


    var rowCount = "";
    var pid = "";
    var proname = "";
    var spec = "";
    var units = "";
    var amount = "";
    var unitprice = "";
    var total = "";
    var goodsuse = "";
    var supplier = "";
    var drawingNum = "";
    var tbody = document.getElementById("GXInfo");
    for (var i = 0; i < tbody.rows.length; i++) {
        var RowCount = document.getElementById("RowCount" + i).innerHTML;
        var ProName = document.getElementById("ProName" + i).innerHTML;
        var Pid = document.getElementById("PID" + i).innerHTML;
        var Spec = document.getElementById("Spec" + i).innerHTML;
        var Units = document.getElementById("Units" + i).innerHTML;
        var Amount = document.getElementById("Amount" + i).value;
        if (Amount == "") {
            alert("数量不可为空");
            return;
        }
        var UnitPrice = document.getElementById("UnitPriceNoTax" + i).value;
        if (UnitPrice == "") {
            alert("单价不可为空");
            return;
        }
        var Total = document.getElementById("TotalNoTax" + i).value;
        if (Total == "") {
            alert("总价不可为空");
            return;
        }
        var GoodsUse = document.getElementById("Price2" + i).value;
        if (GoodsUse == "") {
            alert("税前不可为空");
            return;
        }
        var DrawingNum = document.getElementById("TotalTax" + i).value;
        if (DrawingNum == "") {
            alert("税前总价不可为空");
            return;
        }
        var Supplier = document.getElementById("supplier" + i).innerHTML;
        if (Supplier == "") {
            Supplier == "无";
        }

        rowCount += RowCount;
        proname += ProName;
        pid += Pid;
        spec += Spec;
        units += Units;
        amount += Amount;
        unitprice += UnitPrice;
        total += Total;
        goodsuse += GoodsUse;
        drawingNum += DrawingNum;
        supplier += Supplier;
        if (i < tbody.rows.length - 1) {
            rowCount += ",";
            proname += ",";
            pid += ",";
            spec += ",";
            units += ",";
            amount += ",";
            unitprice += ",";
            total += ",";
            goodsuse += ",";
            drawingNum += ",";
            supplier += ",";
        }
        else {
            rowCount += "";
            proname += " ";
            pid += "";
            spec += " ";
            units += "";
            amount += " ";
            unitprice += " ";
            total += " ";
            goodsuse += " ";
            drawingNum += "";
            supplier += " ";
        }
    }
    var DeliveryDate = $("#DeliveryDate").val();
    if (DeliveryDate == "") {
        alert("交货时间不可为空");
        return;
    }
    isConfirm = confirm("确定要添加吗")
    if (isConfirm == false) {
        return false;
    }
    else {
        $.ajax({
            url: "InsertQG",
            type: "Post",
            data: {
                CID: CID, DeliveryDate: DeliveryDate, PleaseExplain: PleaseExplain, PleaseDate: PleaseDate, OrderContacts: OrderContacts, rowCount: rowCount, proname: proname,
                pid: pid, spec: spec, units: units, amount: amount, unitprice: unitprice, total: total, goodsuse: goodsuse, drawingNum: drawingNum, OrderNumber: OrderNumber,
                supplier: supplier
            },
            async: false,
            success: function (data) {
                if (data.success == true) {
                    alert("成功");
                }
                else {
                    alert("失败");
                }
            }
        });
    }


}
function AddNewBasic() {
    //window.parent.OpenDialog("选择货品信息", "../PPManage/ChangeBasic", 800, 500);
    window.parent.OpenDialog("选择货品信息", "../InventoryManage/ChangeBasic?pid=2&type=QG", 500, 500);
   
}
function addBasicDetail(PID) { //增加货品信息行
    //rowCount = document.getElementById("GXInfo").rows.length;
    //var CountRows = parseInt(rowCount) + 1;
    //var strPID = $("#PID").val();
    //$("#PID").val(strPID + "," + PID);
    $.ajax({
        url: "GetBasicDetail",
        type: "post",
        data: { PID: PID },
        dataType: "json",
        success: function (data) {
            var json = eval(data.datas);
            if (json.length > 0) {
                $("#myTable GXInfo").html("");
                for (var i = 0; i < json.length; i++) {
                    rowCount = document.getElementById("GXInfo").rows.length;
                    var CountRows = parseInt(rowCount) + 1;
                    var html = "";
                    html = '<tr  id ="GXInfo' + rowCount + '"  onclick="selRow(this)">'
                    html += '<td ><lable class="labRowNumber' + rowCount + ' " id="RowCount' + rowCount + '">' + CountRows + '</lable> </td>';
                    html += '<td ><lable class="labPID' + rowCount + ' " id="PID' + rowCount + '">' + json[i].PID + '</lable> </td>';
                    html += '<td ><lable class="labProductID' + rowCount + ' " id="ProName' + rowCount + '">' + json[i].ProName + '</lable> </td>';
                    html += '<td ><lable class="labOrderContent' + rowCount + ' " id="Spec' + rowCount + '">' + json[i].Spec + '</lable> </td>';
                 
                    html += '<td ><lable class="labSpecifications' + rowCount + ' " id="Units' + rowCount + '">' + json[i].Units + '</lable> </td>';

                    html += '<td ><input type="text" style="width:100px" value="0"   onblur="OnBlurAmount(this);" id="Amount' + rowCount + '"> </td>';

                    html += '<td ><lable class="labOrderContent' + rowCount + ' " id="supplierss' + rowCount + '">' + json[i].COMNameC + '</lable> </td>';

                    html += '<td  style="display:none"><lable class="labOrderContent' + rowCount + ' " id="supplier' + rowCount + '">' + json[i].Manufacturer + '</lable> </td>';
                    html += '<td ><input type="text" style="width:100px" value="' + json[i].UnitPrice + '"  onblur="OnBlurAmount(Amount' + rowCount + ');"   id="UnitPriceNoTax' + rowCount + '"> </td>';
                    html += '<td ><input type="text" style="width:100px"    id="TotalNoTax' + rowCount + '"> </td>';

                    html += '<td ><input type="text" style="width:100px" value="' + json[i].Price2 + '"    id="Price2' + rowCount + '"> </td>';
                    html += '<td ><input type="text" style="width:100px"   id="TotalTax' + rowCount + '"> </td>';
                    html += '</tr>'
                    $("#GXInfo").append(html);
                }
                //GetAmount();
            }
        }
    })
}
function DelRow() {
    var tbodyID = "GXInfo";
    var rowIndex = -1;
    var typeNames = ["RowNumber", "ProName", "Spec", "Units", "Amount", "supplier", "supplierss", "UnitPriceNoTax", "TotalNoTax", "Price2", "TotalTax"];

    if (newRowID != "")
        rowIndex = newRowID.replace(tbodyID, '');
    if (rowIndex != -1) {
        document.getElementById(tbodyID).deleteRow(rowIndex);

        if (rowIndex < $("#" + tbodyID + " tr").length) {
            for (var i = rowIndex; i < $("#" + tbodyID + " tr").length; i++) {
                var tr = document.getElementById(tbodyID + (parseInt(i) + 1));
                var tr1 = $("#" + tbodyID + (parseInt(i) + 1));
                tr.id = tbodyID + i;
                for (var j = 0; j < tr.childNodes.length; j++) {
                    var html = tr1.html();
                    for (var k = 0; k < typeNames.length; k++) {

                        var olPID = typeNames[k] + (parseInt(i) + 1);
                        var newid = typeNames[k] + i;

                        var reg = new RegExp(olPID, "g");

                        html = html.replace(reg, newid);

                    }
                    tr1.html(html);
                }
                $("#RowCount" + i).html(parseInt(i) + 1);
            }
        }
        if (document.getElementById(tbodyID).rows.length > 0) {
            if (rowIndex == document.getElementById(tbodyID).rows.length)
                selRow(document.getElementById(tbodyID + (rowIndex - 1)), '');
            else
                selRow(document.getElementById(tbodyID + rowIndex), '');;
        }
    }


    //var tbodyID = "GXInfo";
    //var rowIndex = -1;
    //var typeNames = ["RowNumber", "ProName", "Spec", "Units", "Amount", "UnitPrice", "Total", "GoodsUse", "Remark"];
    ////var typeNames = ["RowNumber"];
    //if (newRowID != "")
    //    rowIndex = newRowID.replace(tbodyID, '');
    //if (rowIndex != -1) {
    //    document.getElementById(tbodyID).deleteRow(rowIndex);
    //    if (rowIndex < $("#" + tbodyID + " tr").length) {
    //        for (var i = rowIndex; i < $("#" + tbodyID + " tr").length; i++) {
    //            var tr = document.getElementById(tbodyID + (parseInt(i) + 1));
    //            var tr1 = $("#" + tbodyID + (parseInt(i) + 1));
    //            tr.id = tbodyID + i;
    //            for (var j = 0; j < tr.childNodes.length; j++) {
    //                var html = tr1.html();
    //                for (var k = 0; k < typeNames.length; k++) {
    //                    var oldid = typeNames[k] + (parseInt(i) + 1);
    //                    var newid = typeNames[k] + i;
    //                    var reg = new RegExp(oldid, "g");
    //                    html = html.replace(reg, newid);
    //                }
    //                tr1.html(html);
    //            }
    //            $("#RowNumber" + i).html(parseInt(i) + 1);
    //        }
    //    }
    //    if (document.getElementById(tbodyID).rows.length > 0) {
    //        if (rowIndex == document.getElementById(tbodyID).rows.length)
    //            selRow(document.getElementById(tbodyID + (rowIndex - 1)), '');
    //        else
    //            selRow(document.getElementById(tbodyID + rowIndex), '');;
    //    }
    //}

    //$("#GXInfo tr").removeAttr("class");

}

var oldid;
function selRow(curRow) {

    if (oldid != null) {
        if (document.getElementById(oldid) != undefined) {
            document.getElementById(oldid).style.backgroundColor = 'white';
        }

    }

    document.getElementById("myTable").style.backgroundColor = 'white';
    newRowID = curRow.id;
    document.getElementById(newRowID).style.backgroundColor = '#EEEEF2';
    oldid = newRowID;
}
function OnBlurAmount(rowcount) //求金额和
{
    var newCount = rowcount.id;
    var Count = $("#" + newCount).val();
    var strRow = newCount.charAt(newCount.length - 1);

    var strU = "#UnitPriceNoTax" + strRow;
    var strUnitPrice = $(strU).val();

    var strP = "#Price2" + strRow;
    var strPrice2 = $(strP).val();

    var strTotal = parseFloat(Count) * parseFloat(strUnitPrice);
    var TotalTax = parseFloat(Count) * parseFloat(strPrice2);

    $("#TotalNoTax" + strRow).val(strTotal);
    $("#TotalTax" + strRow).val(TotalTax);
}
function GetAmount() {  //获取总数金额
    var newCount = rowcount.id;
    var Count = $("#" + newCount).val();
    var strRow = newCount.charAt(newCount.length - 1);

    var strU = "#UnitPriceNoTax" + strRow;
    var strUnitPrice = $(strU).val();

    var strP = "#Price2" + strRow;
    var strPrice2 = $(strP).val();

    var strTotal = parseFloat(Count) * parseFloat(strUnitPrice);
    var TotalTax = parseFloat(Count) * parseFloat(strPrice2);

    $("#TotalNoTax" + strRow).val(strTotal);
    $("#TotalTax" + strRow).val(TotalTax);
}








