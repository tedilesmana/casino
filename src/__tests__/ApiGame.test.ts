describe("API Integration Tests with fetch", () => {
  const gamesUrl = "http://stage.whgstage.com/front-end-test/games.php";
  const jackpotsUrl = "http://stage.whgstage.com/front-end-test/jackpots.php";

  it("should fetch games successfully", async () => {
    const response = await fetch(gamesUrl);

    // Periksa status kode
    expect(response.status).toBe(200);

    // Periksa bahwa data terdefinisi
    const data = await response.json();
    expect(data).toBeDefined();

    // Periksa bahwa data adalah array
    expect(Array.isArray(data)).toBe(true);

    // Periksa properti pada objek di dalam array
    expect(data.length).toBeGreaterThan(0); // Memastikan ada data
    expect(data[0]).toHaveProperty("id");
    expect(data[0]).toHaveProperty("name");
  });

  it("should fetch jackpots successfully", async () => {
    const response = await fetch(jackpotsUrl);

    // Periksa status kode
    expect(response.status).toBe(200);

    // Periksa bahwa data terdefinisi
    const data = await response.json();
    expect(data).toBeDefined();

    // Periksa bahwa data adalah array
    expect(Array.isArray(data)).toBe(true);

    // Periksa properti pada objek di dalam array
    expect(data.length).toBeGreaterThan(0); // Memastikan ada data
    expect(data[0]).toHaveProperty("game");
    expect(data[0]).toHaveProperty("amount");
  });
});
