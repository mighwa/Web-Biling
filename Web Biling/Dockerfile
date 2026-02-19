FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
# Ganti Web-Biling1.csproj jika nama file proyekmu berbeda
COPY ["Web-Biling1.csproj", "."]
RUN dotnet restore "./Web-Biling1.csproj"
COPY . .
RUN dotnet build "Web-Biling1.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Web-Biling1.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Web-Biling1.dll"]