﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TECOCITY_BGOI
{
   public  class ProtoStockInQuery
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
        public string strApplyPer = "";
        // [Remote("CheckUserAccountExists", "SuppliesManage", ErrorMessage = "该供应商编号已存在")] 添加用
        //[StringLength(20, ErrorMessage = "回访编号不能超过20个字符")]
        [ValInjection(ErrorMessageResourceName = "Injection", ErrorMessageResourceType = typeof(Resources.ErrorMsg))]
        [DataFieldAttribute("ApplyPer", "varchar")]
        //入库批号
        public string ApplyPer
        {
            get { return strApplyPer; }
            set { strApplyPer = value; }
        }
    }
}
