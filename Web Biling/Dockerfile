# 1. Gunakan SDK 9.0
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# 2. Salin file project (menggunakan wildcard agar aman dari spasi)
COPY *.csproj ./
RUN dotnet restore

# 3. Salin semua file dan build
COPY . ./
RUN dotnet publish -c Release -o out

# 4. Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# 5. Jalankan (Cara paling aman untuk file dengan spasi)
ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
