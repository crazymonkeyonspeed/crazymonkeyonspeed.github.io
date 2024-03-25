var algtimes = [
[0.23,0.43,0.40,0.28,0.40,0.76,0.29,0.72,0.39,0.35,0.45,0.73,0.53,0.54,0.60,0.58,0.68,0.66,0.37,0.67,0.67,0.65,0.73,0.79,0.30,0.30,0.59,0.60,0.59,0.78,0.34,0.40,0.83,0.61,0.74,0.53,0.32,0.49,0.50,0.51,0.59,0.79,0.005],
[0.47,0.63,0.72,0.73,0.74,0.47,0.64,0.63,0.58,0.65,0.55,0.83,0.65,0.34,0.54,0.47,0.78,0.79,0.61,0.64,0.69,0.48,0.69,0.79,0.62,0.64,0.69,0.49,0.70,0.67,0.50,0.61,0.42,0.75,0.52,0.60,0.58,0.72,0.7,0.49,0.36,0.42,0.61],
[0.44,0.49,0.58,0.6,0.55,0.57,0.27,0.75,0.76,0.66,0.6,0.79,0.6,0.85,0.68,0.69,0.67,0.75,0.8,0.69,0.79,0.47,0.64,0.4,0.67,0.29,0.85,0.62,0.52,0.59,0.63,0.85,0.27,0.59,0.54,0.53,0.46,0.28,0.66,0.39,0.57,0.59,0.5],
[0.27,0.57,0.62,0.55,0.63,0.66,0.33,0.76,0.58,0.69,0.64,0.77,0.76,0.78,0.64,0.69,0.63,0.64,0.68,0.79,0.76,0.47,0.49,0.66,0.61,0.3,0.77,0.58,0.63,0.51,0.63,0.72,0.78,0.28,0.28,0.68,0.47,0.42,0.68,0.38,0.59,0.32,0.66
],
[.66,.44,.71,.64,.72,.66,
.89,.63,.7,.89,.65,.67,




.53,.19,.79
],
[],
[],
[],
[],
[],
[],
[],
[],
[],
[0.5,0.49,0.74,0.52,0.61,0.66,0.5,0.43,0.67,0.49,0.55,0.58,0.34,0.62,0.56,0.72,0.59,0.67,0.78,0.26,0.61,0.77,0.54,0.36,0.65,0.57,0.64,0.5,0.58,0.56,0.65,0.44,0.65,0.48,0.53,0.74,0.48,0.63,0.62,0.43,0.66,0.64,0.59],//U-FH
[0.29,0.44,0.45,0.49,0.55,0.59,0.48,0.4,0.54,0.65,0.41,0.57,0.69,0.74,0.47,0.7,0.55,0.6,0.53,0.65,0.31,0.84,0.58,0.56,0.57,0.46,0.31,0.66,0.4,0.62,0.55,0.47,0.67,0.6,0.75,0.23,0.63,0.4,0.82,0.4,0.6,0.8,0.65],
[0.65,0.34,0.55,0.5,0.61,0.5,0.59,0.63,0.57,0.47,0.68,0.65,0.33,0.73,0.49,0.61,0.57,0.47,0.84,0.54,0.73,0.67,0.48,0.58,0.5,0.58,0.51,0.61,0.49,0.46,0.72,0.69,0.61,0.38,0.62,0.54,0.5,0.57,0.6,0.63,0.7,0.76,0.69],
[0.49,0.42,0.31,0.42,0.27,0.52,0.44,0.45,0.47,0.42,0.28,0.51,0.44,0.48,0.68,0.59,0.64,0.49,0.45,0.64,0.26,0.68,0.29,0.33,0.48,0.46,0.57,0.55,0.29,0.26,0.45,0.47,0.38,0.57,0.59,0.66,0.64,0.41,0.47,0.59,0.45,0.33,0.84],
[0.48,0.49,0.42,0.48,0.61,0.4,0.68,0.49,0.41,0.62,0.5,0.59,0.37,0.55,0.63,0.5,0.5,0.58,0.46,0.73,0.47,0.45,0.59,0.41,0.59,0.65,0.46,0.5,0.62,0.56,0.49,0.18,0.66,0.54,0.59,0.7,0.59,0.49,0.55,0.46,0.54,0.55,0.53],//++FH
[0.68,0.36,0.5,0.66,0.6,0.67,0.65,0.35,0.59,0.63,0.68,0.69,0.44,0.53,0.33,0.49,0.65,0.72,0.56,0.91,0.69,0.75,0.57,0.69,0.62,0.68,0.93,0.68,0.42,0.19,0.76,0.55,0.81,0.63,0.67,0.68,0.46,0.71,0.41,0.6,0.4,0.44,0.69],
[0.58,0.67,0.46,0.55,0.47,0.55,0.82,0.76,0.47,0.73,0.56,0.57,0.36,0.54,0.74,0.42,0.67,0.71,0.46,0.84,0.52,0.4,0.48,0.56,0.57,0.77,0.6,0.52,0.67,0.34,0.65,0.2,0.81,0.69,0.67,0.75,0.65,0.91,0.53,0.5,0.5,0.6,0.7],
[0.69,0.64,0.42,0.79,0.22,0.48,0.83,0.3,0.64,0.45,0.61,0.6,0.36,0.69,0.33,0.73,0.53,0.87,0.46,0.75,0.53,0.81,0.47,0.47,0.71,0.81,0.19,0.53,0.5,0.49,0.51,0.67,0.89,0.58,0.75,0.57,0.59,0.64,0.36,0.68,0.87,0.58,0.5],
[0.62,0.67,0.33,0.48,0.62,0.69,0.37,0.66,0.47,0.66,0.44,0.27,0.58,0.58,0.48,0.12,0.58,0.51,0.65,0.5,0.54,0.56,0.2,0.6,0.67,0.52,0.61,0.44,0.48,0.5,0.49,0.65,0.42,0.66,0.64,0.45,0.49,0.64,0.63,0.33,0.58,0.42,0.52],
[0.42,0.58,0.55,0.7,0.51,0.48,0.59,0.35,0.73,0.78,0.62,0.62,0.46,0.57,0.64,0.6,0.67,0.58,0.78,0.46,0.57,0.83,0.96,0.61,0.53,0.47,0.47,0.49,0.56,0.49,0.79,0.61,0.44,0.69,0.64,0.57,0.72,0.84,0.37,0.61,0.5,0.89,0.61],
[0.57,0.65,0.7,0.67,0.56,0.62,0.64,0.63,0.68,0.41,0.48,0.62,0.48,0.48,0.67,0.67,0.47,0.9,0.46,0.62,0.67,0.81,0.47,0.5,0.57,0.5,0.53,0.51,0.54,0.6,0.6,0.45,0.58,1,0.61,0.79,0.79,0.71,0.59,0.87],
[0.56,0.76,0.32,0.63,0.5,0.48,0.56,0.62,0.34,0.79,0.89,0.47,0.67,0.58,0.74,0.79,0.23,0.58,0.59,0.54,0.47,0.77,0.2,0.64,0.7,0.67,0.76,0.53,0.84,0.43,0.66,0.62,0.48,0.46,0.48,0.6,0.54,0.67,0.66,0.42,0.74,0.29,0.65],
[]];