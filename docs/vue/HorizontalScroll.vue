<template>
    <div class="container">

        <nav class="nav">
            <ul class="nav-list">
                <li>Edno</li>
                <li>Dve</li>
                <li>Tri</li>
                <li>Chetri</li>
                <li>Pet</li>
                <li>Shest</li>
                <li>Sedem</li>
                <li>Osem</li>
                <li>Devet</li>
                <li>Deset</li>
                <li>Edinaise</li>
            </ul>
        </nav>

    </div>
</template>

<script setup>

</script>

<style>
.container {
    max-width: 500px;
    margin: 0 auto;
    padding: 0 20px;
}

.nav {
    overflow: hidden;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch
}

.nav-list {
    list-style: none;
    white-space: nowrap;
    padding-left: 0;
    font-size: 20px;
}

.nav-list li {
    display: inline-block;
    margin-right: 20px;
}

.nav-list:last-child {
    margin-right: 0;
}
</style>

