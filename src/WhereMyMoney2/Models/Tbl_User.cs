﻿using System;
using System.Collections.Generic;

namespace WhereMyMoney2.Models
{
    public partial class Tbl_User
    {
        public Tbl_User()
        {
            Tbl_Category = new HashSet<Tbl_Category>();
            Tbl_Trace = new HashSet<Tbl_Trace>();
        }

        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsActive { get; set; }
        public bool IsAdmin { get; set; }

        public virtual ICollection<Tbl_Category> Tbl_Category { get; set; }
        public virtual ICollection<Tbl_Trace> Tbl_Trace { get; set; }
    }
}
