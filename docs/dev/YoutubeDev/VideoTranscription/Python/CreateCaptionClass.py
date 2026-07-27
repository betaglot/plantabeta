"""
Use Namespaces to create a class structure

"""

def CreateCaptionClass(
                        beta,
                        PlanterZone,
                        labor,
                        ekos,
                        via,
                        MOTONs
                        ):
    print(f"class {beta}:")
    print(f"    class {PlanterZone}:")
    print(f"        class {labor}:")
    print(f"            class {ekos}:")
    print(f"                class {via}:")
    print(f"                    def {MOTONs}():")
    print(f'                        print("{beta}.{PlanterZone}.{labor}_{ekos}_{via}_{MOTONs}")')

CreateCaptionClass("Arm","Anterior","Glove","Rock","Down","Ama")

