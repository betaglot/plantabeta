<script setup>
import BetomsFilter from '/vue/BetomsFilter.vue'
import BetomList from '/vue/List-BetomChips.vue'

</script>

# <div class="text-h2 text-center mb-12"><span class="beta">BETOMs</span></div>

You've probably noticed that elements just exist by themselves, everything is connected as a combinatory system. The unit of combination is called a <span class="beta">BETOM</span>. The rainbow icon has all the colors of <span class="beta">BETAGLOT</span>.

Betoms must include at least two elements

<div class="d-flex justify-center my-4"><BB labor="LABOR" ekos="EKOS" via="VIA" motor="MOTOR" anima="ANIMA"/></div>

The order in which the elements of each group is listed is always the same:

1. ⭐ <span class="labor">LABOR</span>
1. 🔷 <span class="soma">SOMA</span>
1. 🟩 <span class="ekos">EKOS</span>
1. 🔻 <span class="via">VIA</span>
1. 🟠 <span class="motor">MOTOR</span>
1. 💜 <span class="anima">ANIMA</span>

<div class="BetomHexGrid">
<v-img src="/FaktorHex/Anima.png" />
<v-img src="/FaktorHex/Ekos.png" />
<v-img src="/FaktorHex/EkosAnima.png" />
<v-img src="/FaktorHex/EkosMotor.png" />
<v-img src="/FaktorHex/EkosMotorAnima.png" />
<v-img src="/FaktorHex/EkosVia.png" />
<v-img src="/FaktorHex/EkosViaAnima.png" />
<v-img src="/FaktorHex/EkosViaMotor.png" />
<v-img src="/FaktorHex/EkosViaMotorAnima.png"/>
<v-img src="/FaktorHex/Labor.png" />
<v-img src="/FaktorHex/LaborAnima.png" />
<v-img src="/FaktorHex/LaborEkos.png" />
<v-img src="/FaktorHex/LaborEkosAnima.png" />
<v-img src="/FaktorHex/LaborEkosMotor.png" />
<v-img src="/FaktorHex/LaborEkosMotorAnima.png"/>
<v-img src="/FaktorHex/LaborEkosVia.png" />
<v-img src="/FaktorHex/LaborEkosViaAnima.png"/>
<v-img src="/FaktorHex/LaborEkosViaMotor.png" />
<v-img src="/FaktorHex/laborEkosViaMotorAnima.png" />
<v-img src="/FaktorHex/LaborMotor.png" />
<v-img src="/FaktorHex/LaborMotorAnima.png " />
<v-img src="/FaktorHex/LaborSoma.png" />
<v-img src="/FaktorHex/LaborSomaAnima.png" />
<v-img src="/FaktorHex/LaborSomaEkos.png" />
<v-img src="/FaktorHex/LaborSomaEkosAnima.png" />
<v-img src="/FaktorHex/LaborSomaEkosMotor.png" />
<v-img src="/FaktorHex/LaborSomaEkosMotorAnima.png" />
<v-img src="/FaktorHex/LaborSomaEkosVia.png"/>
<v-img src="/FaktorHex/LaborSomaEkosViaAnima.png" />
<v-img src="/FaktorHex/LaborSomaEkosViaMotor.png" />
<v-img src="/FaktorHex/LaborSomaEkosViaMotorAnima.png" />
<v-img src="/FaktorHex/LaborSomaMotor.png" />
<v-img src="/FaktorHex/LaborSomaMotorAnima.png" />
<v-img src="/FaktorHex/LaborSomaVia.png" />
<v-img src="/FaktorHex/LaborSomaViaAnima.png" />
<v-img src="/FaktorHex/LaborSomaViaMotor.png" />
<v-img src="/FaktorHex/LaborSomaViaMotorAnima.png" />
<v-img src="/FaktorHex/LaborVia.png" />
<v-img src="/FaktorHex/LaborViaAnima.png" />
<v-img src="/FaktorHex/LaborViaMotor.png" />
<v-img src="/FaktorHex/LaborViaMotorAnima.png" />
<v-img src="/FaktorHex/Motor.png" />
<v-img src="/FaktorHex/MotorAnima.png" />
<v-img src="/FaktorHex/Soma.png" />
<v-img src="/FaktorHex/SomaAnima.png" />
<v-img src="/FaktorHex/SomaEkos.png" />
<v-img src="/FaktorHex/SomaEkosAnima.png" />
<v-img src="/FaktorHex/SomaEkosMotor.png" />
<v-img src="/FaktorHex/SomaEkosMotorAnima.png" />
<v-img src="/FaktorHex/SomaEkosVia.png" />
<v-img src="/FaktorHex/SomaEkosViaAnima.png" />
<v-img src="/FaktorHex/SomaEkosViaMotor.png" />
<v-img src="/FaktorHex/SomaEkosViaMotorAnima.png" />
<v-img src="/FaktorHex/SomaMotor.png" />
<v-img src="/FaktorHex/SomaMotorAnima.png" />
<v-img src="/FaktorHex/SomaVia.png" />
<v-img src="/FaktorHex/SomaViaAnima.png" />
<v-img src="/FaktorHex/SomaViaMotor.png" />
<v-img src="/FaktorHex/SomaViaMotorAnima.png" />
<v-img src="/FaktorHex/Via.png" />
<v-img src="/FaktorHex/ViaAnima.png" />
<v-img src="/FaktorHex/ViaMotor.png" />
<v-img src="/FaktorHex/ViaMotorAnima.png" />
</div>

<style>
.BetomHexGrid {
display: grid;
grid-template-columns: repeat(16, 1fr);
}
</style>

![ScreenRecording-Betoms](/ScreenRecording-Betoms.gif)

## <span class="beta">BETOM</span> Syntax

<BB labor="LABOR" soma="SOMA" ekos="EKOS" via="VIA" motor="MOTOR" anima="ANIMA"/>

<BB labor="Error,Task,Piece,Aktion,Tool,Strategy,Performance"   via="Geometry,Direction,X-axis,Y-axis,Z-axis,Position,Orientation,Logic,Probability"/>

1. <span class="labor">LABOR</span>
    1. <span class="labor">Error</span>
    2. <span class="labor">Task</span>
        1. <span class="labor">Piece</span>
        2. <span class="labor">Aktion</span>
    3. <span class="labor">Tool</span>
    4. <span class="labor">Strategy</span>
    5. <span class="labor">Performance</span>
2. <span class="soma">SOMA</span>
3. <span class="ekos">EKOS</span>
    1. <span class="ekos">Ekosfera</span>
    2. <span class="ekos">Klimon</span>
4. <span class="via">VIA</span>
    1. <span class="via">Geometry</span>
      1. <span class="via">Direction</span>
        1. <span class="via">X-axis</span>
        2. <span class="via">Y-axis</span>
        3. <span class="via">Z-axis</span>
      2. <span class="via">Position</span>
        1. <span class="via">Proximity</span>
      3. <span class="via">Orientation</span>
    2. <span class="via">Logic</span>
    3. <span class="via">Probability</span>
        1. <span class="via">Site</span>
        2. <span class="via">Passage</span>
5. <span class="motor">MOTOR</span>
6. <span class="anima">ANIMA</span>

### <span class="beta">BETOMGLYF</span> Symbols

#### Square Brackets []

<BB labor="Box.Transport" soma="" ekos="" via="" motor="" anima=""/>

#### Pipe |

<BB labor="Box.Transport" soma="" ekos="" via="2m" motor="" anima=""/>

#### Comma ,

<BB labor="Box.Transport" soma="" ekos="" via="2m,Right" motor="" anima=""/>

#### Plus Sign +

<BB labor="Box.Transport" soma="" ekos="" via="2m,Right" motor="" anima=""/>

#### Parenthesis ()

#### Double Quotes ""

#### Left Side <<  

#### Right Side >>

#### Both Sides <>

<BB soma="<>Arm"/> is the same as <BB soma="Arm+Arm"/>

<BetomList />

---

<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
<!-- =================================================== -->
::: details 🛠

- [Box.Aktion] ([Aktion.Box] == [Bundle.Contain.Box] )
- naming convention follow (x,y,z) coordinates. Time always comes after space given the Faktors' Indexing
    1. Lateral, Medial
    1. Up, Down
    1. In, Out

- <BB  soma="Arm"  via="Length"/> == <BB  soma="Arm"  via="Distance"/>

:::
