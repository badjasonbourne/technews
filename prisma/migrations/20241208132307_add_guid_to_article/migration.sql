-- CreateTable
CREATE TABLE "Article" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "content" TEXT,
    "pubDate" DATETIME NOT NULL,
    "source" TEXT NOT NULL,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "guid" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Article_link_key" ON "Article"("link");

-- CreateIndex
CREATE UNIQUE INDEX "Article_guid_key" ON "Article"("guid");
