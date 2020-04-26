<template>
    <div class="container">
        <div id="select-custom">
            <select v-model="$i18n.locale">
                <option 
                    v-for="(lang, i) in langs"
                    :key="`lang-${i}`"
                    :value="lang"
                >
                {{lang}}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SetLocale',
    data(){
        return {langs: ['en', 'de', 'pt_br', '中文']}
    }
}
</script>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    select {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        outline: 0;
        box-shadow: none;
        border: 0 !important;
        background: #2c3e50;
        background-image: none;
    }
    /* Remove IE arrow */
    select::-ms-expand {
        display: none;
    }
    /* Custom Select */
    #select-custom {
        position: relative;
        display: flex;
        width: 20em;
        height: 3em;
        line-height: 3;
        background: #2c3e50;
        overflow: hidden;
        border-radius: .25em;
    }

    select {
        flex: 1;
        padding: 0 .5em;
        color: #fff;
        cursor: pointer;
    }
    /* Arrow */
    #select-custom::after {
        content: '\25BC';
        position: absolute;
        top: 0;
        right: 0;
        padding: 0 1em;
        background: #34495e;
        color: #fff;
        cursor: pointer;
        pointer-events: none;
        -webkit-transition: .25s all ease;
        -o-transition: .25s all ease;
        transition: .25s all ease;
    }
    /* Transition */
    #select-custom:hover::after {
        color: #ccc;
    }

</style>