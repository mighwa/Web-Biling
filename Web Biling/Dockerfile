# Tahap Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Salin file proyek dan restore
COPY *.csproj ./
RUN dotnet restore

# Salin SEMUA file (termasuk folder suara)
COPY . ./
RUN dotnet publish -c Release -o out

# Tahap Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# Jalankan aplikasi (wildcard membantu menangani spasi di nama .dll)
ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
