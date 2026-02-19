FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Salin file proyek dan restore
COPY *.csproj ./
RUN dotnet restore

# Salin semua file (termasuk wwwroot)
COPY . ./
RUN dotnet publish -c Release -o out

# Tahap Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# Perintah untuk cek apakah folder suara benar-benar ada di server
RUN ls -R wwwroot/suara

ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
