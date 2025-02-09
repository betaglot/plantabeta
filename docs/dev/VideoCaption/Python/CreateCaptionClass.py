"""
Use Namespaces to create a class structure

"""

def CreateCaptionClass(
                        beta,
                        plantorZone,
                        labor,
                        ekos,
                        via,
                        mooves
                        ):
    print(f"class {beta}:")
    print(f"    class {plantorZone}:")
    print(f"        class {labor}:")
    print(f"            class {ekos}:")
    print(f"                class {via}:")
    print(f"                    def {mooves}():")
    print(f'                        print("{beta}.{plantorZone}.{labor}_{ekos}_{via}_{mooves}")')

CreateCaptionClass("Brazo","Anterior","Glove","Rock","Down","Ama")

