export const tool = {
  "id": "E009",
  "title": "동점성계수 계산기",
  "inputs_text": "점성계수 μ [Pa·s], 밀도 ρ [kg/m³]",
  "formula": "ν = μ / ρ",
  "output_text": "동점성계수 ν [m²/s]",
  "assumptions": "μ,ρ>0. 같은 온도·압력의 물성을 사용한다. 점성계수와 동점성계수의 기호·단위를 별개로 표시하고 물성값 자동 추정은 하지 않는다.",
  "purpose": "점도 동점도 계산 / 물성표 단위 혼동 해결",
  "sources": [
    {
      "label": "NASA Glenn · Viscosity",
      "url": "https://www.grc.nasa.gov/www/k-12/airplane/viscosity.html"
    }
  ],
  "slug": "eng-kinematic-viscosity",
  "category": "유체",
  "result_label": "동점성계수 ν",
  "result_dimension": "kinematic",
  "fields": [
    {
      "key": "mu",
      "label": "점성계수 μ",
      "dimension": "viscosity",
      "example": 0.001,
      "constraint": "positive",
      "display_unit": "mPas",
      "display_value": "1"
    },
    {
      "key": "rho",
      "label": "동일 상태의 밀도 ρ",
      "dimension": "density",
      "example": 1000,
      "constraint": "positive",
      "display_unit": "kgm3",
      "display_value": "1000"
    }
  ],
  "site": "https://nanalab.kr/eng-kinematic-viscosity/",
  "repository": "https://github.com/NaNaCompany/eng-kinematic-viscosity",
  "condition": "",
  "output_unit": "m2s"
};
