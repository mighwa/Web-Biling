FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Salin file proyek dan restore
COPY *.csproj ./
RUN dotnet restore

# Salin SEMUA file
COPY . ./
RUN dotnet publish -c Release -o out

# Tahap Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
