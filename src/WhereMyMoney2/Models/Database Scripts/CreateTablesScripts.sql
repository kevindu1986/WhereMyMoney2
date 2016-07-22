CREATE TABLE [dbo].[Tbl_User](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[UserName] [varchar](20) NOT NULL,
	[Password] [varchar](500) NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsAdmin] [bit] NOT NULL,
 CONSTRAINT [PK__Tbl_User__3214EC07A5ED3973] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

CREATE TABLE [dbo].[Tbl_Category](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NOT NULL,
	[UserID] [int] NOT NULL,
	[Description] [ntext] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Tbl_Category] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

CREATE TABLE [dbo].[Tbl_Currency](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CurrencyName] [nvarchar](50) NOT NULL,
	[CurrencyShortName] [nvarchar](50) NOT NULL,
	[UserID] [int] NOT NULL,
	[Description] [ntext] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK__Tbl_Curr__3214EC07B87FE493] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

CREATE TABLE [dbo].[Tbl_TransactionType](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[TransactionTypeName] [nvarchar](50) NOT NULL,
	[IsIncomeType] [bit] NOT NULL,
	[UserID] [int] NOT NULL,
	[Description] [ntext] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Tbl_TransactionType] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

CREATE TABLE [dbo].[Tbl_Trace](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Amount] [decimal](18, 2) NOT NULL,
	[TraceDate] [date] NOT NULL,
	[UserId] [int] NOT NULL,
	[CurrencyId] [int] NOT NULL,
	[CategoryId] [int] NOT NULL,
	[TransactionTypeID] [int] NOT NULL,
	[Description] [ntext] NULL,
	[IsActive] [bit] NOT NULL,
 CONSTRAINT [PK_Tbl_Trace] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[Tbl_Category]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Category_Tbl_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[Tbl_User] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Category] CHECK CONSTRAINT [FK_Tbl_Category_Tbl_User]
GO

ALTER TABLE [dbo].[Tbl_Currency]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Currency_Tbl_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[Tbl_User] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Currency] CHECK CONSTRAINT [FK_Tbl_Currency_Tbl_User]
GO

ALTER TABLE [dbo].[Tbl_TransactionType]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_TransactionType_Tbl_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[Tbl_User] ([Id])
GO

ALTER TABLE [dbo].[Tbl_TransactionType] CHECK CONSTRAINT [FK_Tbl_TransactionType_Tbl_User]
GO

ALTER TABLE [dbo].[Tbl_Trace]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Trace_Tbl_Category] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Tbl_Category] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Trace] CHECK CONSTRAINT [FK_Tbl_Trace_Tbl_Category]
GO

ALTER TABLE [dbo].[Tbl_Trace]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Trace_Tbl_Currency] FOREIGN KEY([CurrencyId])
REFERENCES [dbo].[Tbl_Currency] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Trace] CHECK CONSTRAINT [FK_Tbl_Trace_Tbl_Currency]
GO

ALTER TABLE [dbo].[Tbl_Trace]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Trace_Tbl_TransactionType] FOREIGN KEY([TransactionTypeID])
REFERENCES [dbo].[Tbl_TransactionType] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Trace] CHECK CONSTRAINT [FK_Tbl_Trace_Tbl_TransactionType]
GO

ALTER TABLE [dbo].[Tbl_Trace]  WITH CHECK ADD  CONSTRAINT [FK_Tbl_Trace_Tbl_User] FOREIGN KEY([UserId])
REFERENCES [dbo].[Tbl_User] ([Id])
GO

ALTER TABLE [dbo].[Tbl_Trace] CHECK CONSTRAINT [FK_Tbl_Trace_Tbl_User]
GO