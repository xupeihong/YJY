﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TECOCITY_BGOI
{
    public class BasicStockInQuery
    {
        public string strListInID = "";
        // [Remote("CheckUserAccountExists", "SuppliesManage", ErrorMessage = "该供应商编号已存在")] 添加用
        //[StringLength(20, ErrorMessage = "回访编号不能超过20个字符")]
        [ValInjection(ErrorMessageResourceName = "Injection", ErrorMessageResourceType = typeof(Resources.ErrorMsg))]
        [DataFieldAttribute("ListInID", "varchar")]
        //入库单号
        public string ListInID
        {
            get { return strListInID; }
            set { strListInID = value; }
        }

        public string strBatchID = "";
        // [Remote("CheckUserAccountExists", "SuppliesManage", ErrorMessage = "该供应商编号已存在")] 添加用
        //[StringLength(20, ErrorMessage = "回访编号不能超过20个字符")]
        [ValInjection(ErrorMessageResourceName = "Injection", ErrorMessageResourceType = typeof(Resources.ErrorMsg))]
        [DataFieldAttribute("BatchID", "varchar")]
        //入库批号
        public string BatchID
        {
            get { return strBatchID; }
            set { strBatchID = value; }
        }

        public string strPID = "";
        // [Remote("CheckUserAccountExists", "SuppliesManage", ErrorMessage = "该供应商编号已存在")] 添加用
        //[StringLength(20, ErrorMessage = "回访编号不能超过20个字符")]
        [ValInjection(ErrorMessageResourceName = "Injection", ErrorMessageResourceType = typeof(Resources.ErrorMsg))]
        [DataFieldAttribute("PID", "varchar")]
        //货品编号
        public string PID
        {
            get { return strPID; }
            set { strPID = value; }
        }
        public string strProName = "";
        // [Remote("CheckUserAccountExists", "SuppliesManage", ErrorMessage = "该供应商编号已存在")] 添加用
        //[StringLength(20, ErrorMessage = "回访编号不能超过20个字符")]
        [ValInjection(ErrorMessageResourceName = "Injection", ErrorMessageResourceType = typeof(Resources.ErrorMsg))]
        [DataFieldAttribute("ProName", "varchar")]
        //货品名称
        public string ProName
        {
            get { return strProName; }
            set { strProName = value; }
        }
    }
}