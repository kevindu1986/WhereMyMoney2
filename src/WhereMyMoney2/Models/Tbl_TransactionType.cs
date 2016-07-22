using System;
using System.Collections.Generic;

namespace WhereMyMoney2.Models
{
    public partial class Tbl_TransactionType
    {
        public Tbl_TransactionType()
        {
            Tbl_Trace = new HashSet<Tbl_Trace>();
        }

        public int Id { get; set; }
        public string TransactionTypeName { get; set; }
        public bool IsIncomeType { get; set; }
        public int UserID { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Tbl_Trace> Tbl_Trace { get; set; }
        public virtual Tbl_User User { get; set; }
    }
}
