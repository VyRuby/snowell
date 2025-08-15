
import React from "react";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, Table, TableRow, TableCell, WidthType } from "docx";
import productsData from "../../data/products.json";

export default function ProductCatalogue() {
  const formatKey = (key) =>
    key.split("_").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

  // Export Product Details
  const exportProductDetails = () => {
    const doc = new Document({
      sections: [
        {
          children: productsData.map((product) => {
            const rows = Object.entries(product)
              .filter(([key]) => !["images", "details", "image", "status"].includes(key))
              .map(([key, value]) => {
                let displayValue = Array.isArray(value) ? value.join(", ") : value?.toString() || "N/A";
                return new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph(formatKey(key))] }),
                    new TableCell({ children: [new Paragraph(displayValue)] }),
                  ],
                });
              });

            return new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({
                      children: [new Paragraph({ text: product.name, bold: true })],
                      columnSpan: 2,
                    }),
                  ],
                }),
                ...rows,
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("")], columnSpan: 2 }),
                  ],
                }),
              ],
            });
          }),
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Products_Details.docx");
    });
  };

  // Export Prices Only
  const exportPrices = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Table({
              width: { size: 100, type: WidthType.PERCENTAGE },
              rows: [
                new TableRow({
                  children: [
                    new TableCell({ children: [new Paragraph("Product Name")] }),
                    new TableCell({ children: [new Paragraph("Price ($)")] }),
                  ],
                }),
                ...productsData.map((p) =>
                  new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph(p.name)] }),
                      new TableCell({ children: [new Paragraph(p.price.toString())] }),
                    ],
                  })
                ),
              ],
            }),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "Product_Prices.docx");
    });
  };

  return (
    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "10px" }}>
      <button className="btn btn-primary rounded-pill" onClick={exportProductDetails}>
        Export Product Details
      </button>
      <button className="btn btn-success rounded-pill" onClick={exportPrices}>
        Export Prices Only
      </button>
    </div>
  );
}
