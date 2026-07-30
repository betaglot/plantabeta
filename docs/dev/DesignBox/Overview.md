# DesignBox processing

## Grow the Content in the DesignBox

> The goal is expand single word list items into descriptions.

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

#### Describe the Relationships

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