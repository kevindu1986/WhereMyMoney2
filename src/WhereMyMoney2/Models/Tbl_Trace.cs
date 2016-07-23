using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace WhereMyMoney2.Models
{
    public partial class Tbl_Trace
    {
        public int Id { get; set; }
        public decimal Amount { get; set; }
        public DateTime TraceDate { get; set; }
        public int UserId { get; set; }
        public int CurrencyId { get; set; }
        public int CategoryId { get; set; }
        public int TransactionTypeID { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        [JsonIgnore]
        public virtual Tbl_Category Category { get; set; }
        [JsonIgnore]
        public virtual Tbl_Currency Currency { get; set; }
        [JsonIgnore]
        public virtual Tbl_TransactionType TransactionType { get; set; }
        [JsonIgnore]
        public virtual Tbl_User User { get; set; }

        public string CategoryName
        {
            get
            {
                if(Category != null)
                {
                    return Category.CategoryName;
                }
                return string.Empty;
            }
        }

        public string CurrencyShortName
        {
            get
            {
                if (Currency != null)
                {
                    return Currency.CurrencyShortName;
                }
                return string.Empty;
            }
        }

        public string TransactionTypeName
        {
            get
            {
                if (TransactionType != null)
                {
                    return TransactionType.TransactionTypeName;
                }
                return string.Empty;
            }
        }
    }
}
