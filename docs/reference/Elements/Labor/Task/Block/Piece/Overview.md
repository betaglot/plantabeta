<script setup>
import ElementInfo from '/vue/ElementPage/Page-ElementInfo.vue'
import ElementTaxonomy from '/vue/ElementPage/Header-ElementTaxonomy.vue'
let elementName = "Piece"

</script>

# ⭐<span class="labor">Piece</span>

<ElementTaxonomy :elementName="elementName" />

<ElementInfo :elementName=elementName />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details &

- [Piece.Anatomy]
- [Piece.Difficulty]
    [Piece.Difficulty.Krux]
    - Easiest part of Piece. Creamiest part.

- [Piece.Boundary.]
    - [Piece.Boundary.Treeline]
    - [Piece.Boundary.Road]
    - ContiguousPiece
    - [Piece.Boundary.Cliff]
    - PieceBack

    - ([Piece.LeftSide] != [Piece.Boundary.Left])
    - PieceSide
        - PieceLeftSide
        - PieceRightSide
    - PieceFront
    - ResidualPatch
        - Wildlife Tree Patch (WTP)
        - Island
        - ResidualPatchCount
        - ResidualPatch
            - [ResidualPatch|Marked]
            - [ResidualPatch|Unmarked]

- [Piece.Morfos]
    - SquarePiece
    - TrianglePiece
    - PocketPiece
    - HourglassPiece
- "cut the piece"
    - Delimit
    - "Markate the Piece"
        - [Piece.Markate]
        - [Piece.Markation] includes Block boundary flag place by foresters

:::
