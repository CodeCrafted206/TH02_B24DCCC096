// Weather.tsx
import React, { useState } from "react";
import axios from "axios";

// Định nghĩa cấu trúc dữ liệu thời tiết để code an toàn hơn
interface WeatherData {
  current_condition: {
    temp_C: string;
    weatherDesc: { value: string }[];
  }[];
}

const Weather: React.FC = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!city.trim()) {
      setError("Vui lòng nhập tên thành phố.");
      return;
    }
    setLoading(true);
    setError("");
    setWeather(null);
    try {
      const res = await axios.get<WeatherData>(`https://wttr.in/${city}?format=j1`);
      setWeather(res.data);
    } catch (err) {
      setError("Không tìm thấy thành phố này!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>🌤️ Ứng dụng thời tiết</h2>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nhập tên thành phố..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} disabled={loading} style={{ padding: '8px 12px' }}>
        {loading ? 'Đang tìm...' : 'Tìm kiếm'}
      </button>

      {error && <p style={{ color: "red", marginTop: '10px' }}>{error}</p>}

      {weather && (
        <div style={{ marginTop: "20px", border: '1px solid #ccc', padding: '15px', borderRadius: '5px' }}>
          <h3>Thời tiết tại {city}</h3>
          <p>Nhiệt độ: {weather.current_condition[0].temp_C}°C</p>
          <p>Tình trạng: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;


