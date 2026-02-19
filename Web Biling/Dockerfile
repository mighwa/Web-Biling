# 1. Gunakan SDK 9.0 (sesuai kebutuhan projectmu sebelumnya)
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# 2. Salin file project menggunakan wildcard (*) agar aman dari spasi
COPY *.csproj ./
RUN dotnet restore

# 3. Salin semua file lainnya
COPY . ./

# 4. Build aplikasi (menggunakan wildcard juga agar aman)
RUN dotnet publish *.csproj -c Release -o out

# 5. Gunakan Runtime 9.0
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# 6. Jalankan aplikasi (Gunakan bintang agar tidak error tanda kutip)
ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
