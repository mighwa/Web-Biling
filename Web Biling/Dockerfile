# 1. Gunakan SDK 9.0 (Versi terbaru yang stabil di Render)
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# 2. Salin file proyek menggunakan wildcard (*) agar aman dari spasi
COPY *.csproj ./
RUN dotnet restore

# 3. Salin semua file lainnya dan build
COPY . ./
RUN dotnet publish -c Release -o out

# 4. Gunakan Runtime 9.0
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# 5. Jalankan aplikasi (Cara paling aman untuk file dengan spasi)
ENTRYPOINT ["sh", "-c", "dotnet *.dll"]
