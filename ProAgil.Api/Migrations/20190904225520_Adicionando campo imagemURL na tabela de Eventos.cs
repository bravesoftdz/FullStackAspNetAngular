using Microsoft.EntityFrameworkCore.Migrations;

namespace ProAgil.Api.Migrations
{
    public partial class AdicionandocampoimagemURLnatabeladeEventos : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageURL",
                table: "Eventos",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageURL",
                table: "Eventos");
        }
    }
}
