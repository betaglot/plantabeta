"""
Use Namespaces to create a class structure

"""

def CreateCaptionClass(
                        beta,
                        plantorZone,
                        labor,
                        ekos,
                        via,
                        MOTONs
                        ):
    print(f"class {beta}:")
    print(f"    class {plantorZone}:")
    print(f"        class {labor}:")
    print(f"            class {ekos}:")
    print(f"                class {via}:")
    print(f"                    def {MOTONs}():")
    print(f'                        print("{beta}.{plantorZone}.{labor}_{ekos}_{via}_{MOTONs}")')

CreateCaptionClass("Brazo","Anterior","Glove","Rock","Down","Ama")

