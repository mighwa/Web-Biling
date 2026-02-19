FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Salin file proyek
COPY *.csproj ./
RUN dotnet restore

# Salin SEMUA file (ini otomatis mengangkut folder wwwroot/suara)
COPY . ./
RUN dotnet publish -c Release -o out

# Tahap Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
