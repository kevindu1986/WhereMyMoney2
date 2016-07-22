using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WhereMyMoney2.Models
{
    public partial class WhereMyMoneyContext : DbContext
    {
        //Scaffold-DbContext "Server=WIN-01\WIN_01_SQL;Database=WhereMyMoney;User Id=sa;Password=R6zntmydkm2?" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models/MockData

        public WhereMyMoneyContext(DbContextOptions<WhereMyMoneyContext> options)
            : base(options)
        { }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tbl_Category>(entity =>
            {
                entity.Property(e => e.CategoryName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Description).HasColumnType("ntext");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tbl_Category)
                    .HasForeignKey(d => d.UserID)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Category_Tbl_User");
            });

            modelBuilder.Entity<Tbl_Currency>(entity =>
            {
                entity.Property(e => e.CurrencyName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.CurrencyShortName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Description).HasColumnType("ntext");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tbl_Currency)
                    .HasForeignKey(d => d.UserID)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Currency_Tbl_User");
            });

            modelBuilder.Entity<Tbl_Trace>(entity =>
            {
                entity.Property(e => e.Amount).HasColumnType("decimal");

                entity.Property(e => e.Description).HasColumnType("ntext");

                entity.Property(e => e.TraceDate).HasColumnType("date");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Tbl_Trace)
                    .HasForeignKey(d => d.CategoryId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Trace_Tbl_Category");

                entity.HasOne(d => d.Currency)
                    .WithMany(p => p.Tbl_Trace)
                    .HasForeignKey(d => d.CurrencyId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Trace_Tbl_Currency");

                entity.HasOne(d => d.TransactionType)
                    .WithMany(p => p.Tbl_Trace)
                    .HasForeignKey(d => d.TransactionTypeID)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Trace_Tbl_TransactionType");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tbl_Trace)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_Trace_Tbl_User");
            });

            modelBuilder.Entity<Tbl_TransactionType>(entity =>
            {
                entity.Property(e => e.Description).HasColumnType("ntext");

                entity.Property(e => e.TransactionTypeName)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Tbl_TransactionType)
                    .HasForeignKey(d => d.UserID)
                    .OnDelete(DeleteBehavior.Restrict)
                    .HasConstraintName("FK_Tbl_TransactionType_Tbl_User");
            });

            modelBuilder.Entity<Tbl_User>(entity =>
            {
                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasColumnType("varchar(500)");

                entity.Property(e => e.UserName)
                    .IsRequired()
                    .HasColumnType("varchar(20)");
            });
        }

        public virtual DbSet<Tbl_Category> Tbl_Category { get; set; }
        public virtual DbSet<Tbl_Currency> Tbl_Currency { get; set; }
        public virtual DbSet<Tbl_Trace> Tbl_Trace { get; set; }
        public virtual DbSet<Tbl_TransactionType> Tbl_TransactionType { get; set; }
        public virtual DbSet<Tbl_User> Tbl_User { get; set; }
    }
}