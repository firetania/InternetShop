USE InternetShop
GO

CREATE TABLE [Users] (
  [ID] int identity(1,1),
  [Login] nvarchar(50),
  [ChatID] nvarchar(50),
  [FullName] nvarchar(100),
  [DOB] datetime,
  PRIMARY KEY ([ID])
);

CREATE TABLE [OneTimePasswords] (
  [ID] int identity(1,1),
  [UserID] int,
  [ExpirationDate] nvarchar(50),
  [WrongAttempts] int,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_OneTimePasswords.UserID]
    FOREIGN KEY ([UserID])
      REFERENCES [Users]([ID])
);

CREATE TABLE [Clients] (
  [ID] int identity(1,1),
  [FullName] nvarchar(50),
  [Email] nvarchar(50),
  [DOB] datetime,
  [Login] nvarchar(50),
  [Password] nvarchar(100),
  PRIMARY KEY ([ID])
);

CREATE TABLE [OnlineStoreCarts] (
  [ID] int identity(1,1),
  [CreationDate] datetime,
  [ClientID] int,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_OnlineStoreCarts.ClientID]
    FOREIGN KEY ([ClientID])
      REFERENCES [Clients]([ID])
);

CREATE TABLE [Items] (
  [ID] int identity(1,1),
  [Name] nvarchar(100),
  [Price] int,
  [Picture] nvarchar(1000),
  [Description] nvarchar(1000),
  [Size] nvarchar(20),
  [Cover] nvarchar(50),
  [Ruling] nvarchar(50),
  [Color] nvarchar(100),
  [NumberOfPages] int,
  [PaperWeight] int,
  [ItemWeight] int,
  PRIMARY KEY ([ID])
);

CREATE TABLE [PickupPoints] (
  [ID] int identity(1,1),
  [Address] nvarchar(1000),
  [Email] nvarchar(50),
  [OperatingMode] nvarchar(1000),
  PRIMARY KEY ([ID])
);

CREATE TABLE [Orders] (
  [ID] int identity(1,1),
  [OrderDate] datetime,
  [FullPrice] int,
  [Status] int,
  [PickupPointID] int,
  [ClientID] int,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_Orders.PickupPointID]
    FOREIGN KEY ([PickupPointID])
      REFERENCES [PickupPoints]([ID]),
  CONSTRAINT [FK_Orders.ClientID]
    FOREIGN KEY ([ClientID])
      REFERENCES [Clients]([ID])
);

CREATE TABLE [ItemsInOrders] (
  [ID] int identity(1,1),
  [OrderID] int,
  [ItemID] int,
  [ItemAmount] int,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_ItemsInOrders.ItemID]
    FOREIGN KEY ([ItemID])
      REFERENCES [Items]([ID]),
  CONSTRAINT [FK_ItemsInOrders.OrderID]
    FOREIGN KEY ([OrderID])
      REFERENCES [Orders]([ID])
);

CREATE TABLE [ItemsInCarts] (
  [ID] int identity(1,1),
  [CartID] int,
  [ItemID] int,
  [ItemAmount] int,
  PRIMARY KEY ([ID]),
  CONSTRAINT [FK_ItemsInCarts.CartID]
    FOREIGN KEY ([CartID])
      REFERENCES [OnlineStoreCarts]([ID]),
  CONSTRAINT [FK_ItemsInCarts.ItemID]
    FOREIGN KEY ([ItemID])
      REFERENCES [Items]([ID])
);