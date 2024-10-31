# The Shadow of the Cursed Pumpkins

In the dark village of **Nocturnia**, an ancient curse has resurfaced. The pumpkins, once symbols of protection on Halloween, now emanate a sinister presence. The inhabitants live in fear, and the streets are shrouded in shadows and mystery.

You are **Raven**, an investigator of the occult. You have arrived in Nocturnia after receiving a mysterious letter imploring you to break the curse consuming the village. You discover that the sources of joy, the precious candies, have disappeared, replaced by enigmas and dangers hidden beneath cursed pumpkins.

Your mission is to unravel the secrets of the enchanted map, follow the clues, and avoid the traps that evil has left in its wake. Only then can you free Nocturnia from darkness and restore hope to its inhabitants before the eternal night takes over the world.

## Technical Game Instructions

The game involves discovering the hidden candy sources on a map by following certain rules and using the provided clues. Below are the map elements and the rules for solving it.

### Map Elements

- **🎃 Cursed Pumpkin**: A cell that can hide a candy source.
- **🍬 Haunted Candy**: Indicates that there is a hidden candy source in the adjacent cells (up, down, left, or right).
- **🪅 Profane Relic**: Indicates that there is a hidden candy source in the adjacent cells, including diagonals.
- **💥 Evil Seal**: Nullifies the adjacent cells (up, down, left, or right), preventing them from containing candy sources.

### Game Rules

1. **Nullification by Evil Seal (💥)**:
   - Cells adjacent to a **💥** cannot contain candy sources. These cells are nullified and should not be considered when searching for sources.

2. **Detection by Haunted Candy (🍬)**:
   - Adjacent cells to a **🍬** must contain a candy source if they are pumpkins and not nullified.

3. **Detection by Profane Relic (🪅)**:
   - Cells adjacent to a **🪅**, including diagonals, must contain a candy source if they are pumpkins and not nullified.

4. **Cursed Pumpkins (🎃)**:
   - They can hide a candy source or be empty. Use the clues from **🍬** and **🪅** to determine which ones contain sources.

5. **Map Resolution**:
   - Mark pumpkins that contain candy sources with **🌈**.
   - Mark pumpkins nullified by an **💥** with **💀**.
   - Pumpkins that do not contain sources and are not nullified remain as **🎃**.

### Objective

Determine the location of all the candy sources hidden under the cursed pumpkins by following the clues and avoiding the nullified cells. The goal is to correctly identify all the sources to break the curse afflicting Nocturnia.

### Example Map and Solution

#### Initial Map

```
🎃 🍬 🎃 💥
🍬 🎃 🎃 🎃
🎃 🎃 🪅 🎃
🎃 🎃 🎃 🎃
```

#### Resolved Map

```
🌈 🍬 💀 💥
🍬 🌈 🌈 💀
🌈 🌈 🪅 🌈
🎃 🌈 🌈 🌈
```

- **🌈**: Pumpkin with a candy source.
- **💀**: Pumpkin nullified by an evil seal.
- **🎃**: Pumpkin without a candy source and not nullified.