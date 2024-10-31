# La Sombra de las Calabazas Malditas

En el oscuro pueblo de **Nocturnia**, una antigua maldición ha resurgido. Las calabazas, antes símbolo de protección en Halloween, ahora emanan una presencia siniestra. Los habitantes viven con miedo, y las calles están envueltas en sombras y misterio.

Eres **Raven**, una investigadora de lo oculto. Has llegado a Nocturnia tras recibir una misteriosa carta que te implora romper la maldición que consume al pueblo. Descubres que las fuentes de alegría, los preciados caramelos, han desaparecido, reemplazados por enigmas y peligros ocultos bajo calabazas malditas.

Tu misión es desentrañar los secretos del mapa encantado, seguir las pistas y evitar las trampas que el mal ha dejado a su paso. Solo así podrás liberar a Nocturnia de la oscuridad y devolver la esperanza a sus habitantes antes de que la noche eterna se apodere del mundo.

## Instrucciones Técnicas del Juego

El juego consiste en descubrir las fuentes de caramelos ocultas en un mapa siguiendo ciertas reglas y utilizando las pistas proporcionadas. A continuación, se detallan los elementos del mapa y las reglas para resolverlo.

### Elementos del Mapa

- **🎃 Calabaza Maldita**: Celda que puede ocultar una fuente de caramelos.
- **🍬 Caramelo Embrujado**: Indica que en las celdas adyacentes (arriba, abajo, izquierda o derecha) hay una fuente de caramelos oculta.
- **🪅 Reliquia Profana**: Indica que en las celdas adyacentes, incluyendo las diagonales, hay una fuente de caramelos oculta.
- **💥 Sello Maligno**: Anula las celdas adyacentes (arriba, abajo, izquierda o derecha), impidiendo que puedan contener fuentes de caramelos.

### Reglas del Juego

1. **Anulación por Sello Maligno (💥)**:
   - Las celdas adyacentes a un **💥** no pueden contener fuentes de caramelos. Estas celdas quedan anuladas y no deben ser consideradas al buscar las fuentes.

2. **Detección por Caramelo Embrujado (🍬)**:
   - Las celdas adyacentes a un **🍬** deben contener una fuente de caramelos si son calabazas y no están anuladas.

3. **Detección por Reliquia Profana (🪅)**:
   - Las celdas adyacentes, incluyendo las diagonales, a una **🪅** deben contener una fuente de caramelos si son calabazas y no están anuladas.

4. **Calabazas Malditas (🎃)**:
   - Pueden ocultar una fuente de caramelos o estar vacías. Utiliza las pistas de **🍬** y **🪅** para determinar cuáles contienen fuentes.

5. **Resolución del Mapa**:
   - Marca las calabazas que contienen fuentes de caramelos con **🌈**.
   - Marca las calabazas anuladas por un **💥** con **💀**.
   - Las calabazas que no contienen fuentes y no están anuladas permanecen como **🎃**.

### Objetivo

Determinar la ubicación de todas las fuentes de caramelos ocultas bajo las calabazas malditas, siguiendo las pistas y evitando las celdas anuladas. El objetivo es identificar correctamente todas las fuentes para romper la maldición que afecta a Nocturnia.

### Ejemplo de Mapa y Solución

#### Mapa Inicial

```
🎃 🍬 🎃 💥
🍬 🎃 🎃 🎃
🎃 🎃 🪅 🎃
🎃 🎃 🎃 🎃
```

#### Mapa Resuelto

```
🌈 🍬 💀 💥
🍬 🌈 🌈 💀
🌈 🌈 🪅 🌈
🎃 🌈 🌈 🌈
```

- **🌈**: Calabaza con fuente de caramelos.
- **💀**: Calabaza anulada por un sello maligno.
- **🎃**: Calabaza sin fuente de caramelos y no anulada.
