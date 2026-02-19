# Gunakan SDK 9.0 karena project kamu meminta versi di atas 8.0
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /app

# Salin file project dengan tanda kutip karena ada spasi
COPY "Web Billing.csproj" ./
RUN dotnet restore "Web Billing.csproj"

# Salin semua file dan build
COPY . ./
RUN dotnet publish "Web Billing.csproj" -c Release -o out

# Gunakan Runtime 9.0
FROM mcr.microsoft.com/dotnet/aspnet:9.0
WORKDIR /app
COPY --from=build /app/out .

# Pastikan nama .dll sesuai dengan yang ada di gambar GitHub kamu
ENTRYPOINT ["dotnet", "Web Billing.dll"]
