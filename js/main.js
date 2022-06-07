
function init() {
    class Hero {
        constructor(name, hp, mana, attack, armor) {
            this.name = name;
            this.hp = hp;
            this.mana = mana;
            this.attack = attack;
            this.armor = armor;
        }
    }
    class Knight extends Hero {
        set heal(value) {
            const hp = this.hp += value;
            this.hp = hp > 1000 ? 1000 : hp;
        }
        set shield(value) {
            const shield = this.armor += value;
            this.armor = shield + 30;
        }
        set ultimate(value) {
            const attack = this.attack *= 3;
            const mana = this.mana -= 50;

        }

    }
    class Boss extends Hero {
        set rage(value) {
            const rage = this.attack *= 2;
        }
    }

    const chaosKnight = new Knight('chaosKnight', 950, 200, 100, 5);
    console.log('chaosKnight', chaosKnight)
    chaosKnight.heal = 100
    chaosKnight.ultimate = ''
    
    let stats = '';
    for(let i in chaosKnight){
        stats +=`
        <tr>
        <th>${i}</th>
        <br>
        <td> ${chaosKnight[i]}</td>
        <br>
        <tr>`
    };
    document.getElementById('stats').innerHTML = stats.toUpperCase();

    const roshan = new Boss('Roshan', 5000, 0, 50, 0);
    console.log('Roshan', roshan)
    roshan.rage = ''
    let stats2 = '';
    for(let i in roshan){
        stats2 +=`
        <tr>
        <th>${i}</th>
        <br>
        <td> ${roshan[i]}</td>
        <br>
        <tr>`
    };
    document.getElementById('stats2').innerHTML = stats2.toUpperCase();
    
}
init()
