# Gunakan SDK .NET 8 untuk tahap build
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# 1. Salin file project (.csproj) saja dulu untuk restore (biar cepat)
# Gunakan wildcard (*) supaya dia mencari file .csproj apa pun namanya
COPY *.csproj ./
RUN dotnet restore

# 2. Salin semua file lainnya dari laptop/github ke dalam folder /app di Docker
COPY . ./

# 3. Build dan publish aplikasinya ke folder bernama 'out'
RUN dotnet publish -c Release -o out

# 4. Gunakan ASP.NET Runtime (ukuran lebih kecil) untuk menjalankan aplikasi
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /app

# Salin hasil build dari tahap sebelumnya
COPY --from=build /app/out .

# 5. Jalankan aplikasi (Ganti 'Web-Biling.dll' jika nama file aslimu berbeda)
ENTRYPOINT ["dotnet", "Web-Biling.dll"]
