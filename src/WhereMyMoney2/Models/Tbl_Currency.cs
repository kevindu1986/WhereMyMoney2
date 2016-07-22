using System;
using System.Collections.Generic;

namespace WhereMyMoney2.Models
{
    public partial class Tbl_Currency
    {
        public Tbl_Currency()
        {
            Tbl_Trace = new HashSet<Tbl_Trace>();
        }

        public int Id { get; set; }
        public string CurrencyName { get; set; }
        public string CurrencyShortName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }

        public virtual ICollection<Tbl_Trace> Tbl_Trace { get; set; }
    }
}
