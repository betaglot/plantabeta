# DesignBox processing

## Grow the Content in the DesignBox

> The goal is expand single word list items into descriptions using Ink, so can diagram!

### Example: Ama

```md
- Absorb  
- “post up”, Wrestling(“Post a leg out”)  
- Prop  
- LegProp  
- Kryos  
- Kontakt at the Distal end of a Kryos limb
    - Climbing(“Flagging”)  
- Polynesian Etymology Canoe
```

## Convert DesignBox into SYSTEMA

Use RegEx and other searching algorithms to systematize the Content of the DesignBox

### Find the Relationships between ELEMENTs

Use Python to write "Ama" in the design box of these elements:

```md
- Related ELEMENTs
    - Absorb
        - 
    - Kryos
        - 
    - Kontakt
        - 
```

Then after they have been printed I'll go through all the ELEMENTs and describe the relationship using English, using a BETOM, using an ELEMENT type.

Eventually all the descriptions will be encoded using ELEMENT types (Undefined, Defined, Axiom, Proposition)

```md
- Related ELEMENTs
    - Absorb
        - Ama is used to [Absorb|Korpo|Rotation] along with [Leg.EccentricContraction]
    - Kryos
        - Ama can be locked, like during a twist lock
    - Kontakt
        - Ama requires Kontakt
```

This example is obvious because the related elements are individually listed. It's still useful to  

A more complex and useful

#### Python Code for Writing a list of Relations

- Put all the stuff that you're going to write into a JSON, then write it separately. Be sure to commit before testing the writing so you can discard changes if the formatting get messed up.
    - Growth Cycle from Alan to Analog and back
        - JSON to JSON
        - then JSON to Markdown
        - then Markdown to JSON
- Manually only write to Markdown Files, not the values of the JSON. The Markdown in reference is the single SourceOfTruth

- You may need to remove emojis first, since some Python Methods don't work with them

- You can just keep it within the JSON and just use the find the Keys within all the other Key's Lists

- Write the RelationList to the JSON, append to current instead of creating a whole new JSON, but still create and write to a new file

- With the 20260730_120632_DesignBox_Relations.json file, make a Markdown file with the keyname highlighted

- ❌ "Site" is Showing up in "Sit"

- ❌ Remove the Paths
    - ViaKomposition: - "VIA.VIA_Sequence.AreaCoverFrase.Overview"
    - ViaKomposition: - "VIA.VIA_Sequence.AreaCoverFrase.VIA_ShapeInscription.Overview"`
    - ViaKomposition: - "VIA.VIA_Sequence.AreaCoverFrase.VIA_ShapeInscription.VIA_CircleInscription"
    - ViaKomposition: - "VIA.VIA_Sequence.AreaCoverFrase.VIA_ShapeInscription.VIA_SquareInscription"
    - ViaKomposition: - "VIA.fVIA_Sequence.AreaCoverFrase.VIA_ShapeInscription.VIA_TriangleInscription"
    - ViaKomposition: - "VIA.VIA_Sequence.BagUpFrase"

The output lists are the instances of each ELEMENT

- Limit it to ELEMENTs and BETOMs 

- How much of this Induction and Deduction can be done by Alan?
    - Inheritance
    - 

- Are properties and Attributes propositions
    - No but the information that they share allows one to be translated into the other.

- Find the patterns of the ELEMENT instances to discover the properties of the given ELEMENT
    - Do Induction and Deduction always produce Propositions?
    - Force Questions
    - Instances to ELEMENT (Induction)
        - Given the other Instances, what
            - Can it be the opposite? (AristotleOrganon)
                - If all the Instances of Ama are Static, then is that from incompleteness or is there some attribute which negates Dynamism for Ama.  
            - Similar Instances probably share similar ELEMENTs
                - Ama
                    - Kryos, Lean, Rest are all Static, so Ama is static, can it be Dynamic
        - Find properties
        - What is shared between Instances?
            - Is there a shared ELEMENT between ELEMENTs or some noncoded differentia
    - ELEMENT to Instances (Deduction)
        - Inheritance
            - Given the genus of this ELEMENT, what Instances are implied to this ELEMENT.

- Find what Instances are missing

```md
- Ama-Arm: - [Ama|Arm] during BagLoad
- Ama-Arm: - "Aktion.ArmAktion.[Ama|Arm]"
- Friction: - What are the physics of when you stab your spade into an EKON to act as a Kontakt for Ama or PoleVault?
- Kryos: - [Ama.Kryos]
- Lean: - Differentiate(Lean,Ama)
- Pugno: - [Ama.Pugno|Trunk]
- Rest: - [Rest.Ama]
- Ski: - Lean Posteriorly to prevent toes from snagging, use spade to Ama if you lean too far posteriorly
```

-------------------------------------------------------
-------------------------------------------------------
-------------------------------------------------------

#### Describe the Relationships Manually

> The ultimate goal is to map out the relationships in a dependency graph like <https://writings.stephenwolfram.com/2020/09/the-empirical-metamathematics-of-euclid-and-beyond/>

- UndefinedTerms
    - Axioms give meaning to the undefined terms
- Axioms
    - Is composed of Undefined Terms
- Definitions
    - Is composed of
- Propositions
    - Composed of

"ELEMENTs in the same Definition"

"ELEMENTs in the same Axiom"

"ELEMENTS are in the same Proposition"

"Contrary of another ELEMENT"