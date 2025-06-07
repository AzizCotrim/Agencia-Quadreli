# Usado para rodar a aplicação
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
EXPOSE 8080
EXPOSE 8081

# Usado para buildar a aplicação
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
ARG BUILD_CONFIGURATION=Release
WORKDIR /src
COPY ["Agencia-Quadreli/Agencia-Quadreli.csproj", "Agencia-Quadreli/"]
RUN dotnet restore "./Agencia-Quadreli/Agencia-Quadreli.csproj"
COPY . .
WORKDIR "/src/Agencia-Quadreli"
RUN dotnet build "./Agencia-Quadreli.csproj" -c $BUILD_CONFIGURATION -o /app/build

# Usado para publicar a aplicação
FROM build AS publish
ARG BUILD_CONFIGURATION=Release
RUN dotnet publish "./Agencia-Quadreli.csproj" -c $BUILD_CONFIGURATION -o /app/publish /p:UseAppHost=false

# Imagem final para rodar a aplicação
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Agencia-Quadreli.dll"]
