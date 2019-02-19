
import '../scss/style.scss';


$(document).ready(function() {
    
    let btnAccept = $('<button class="btn btnAccept"/>')
    let btnReject = $('<button class="btn btnReject"/>')

    function paraClicked() {
            let idField = $(this).attr("id")
            let aboutText = $('#'+ idField).html();
            let editableText = $('<input class="edit_'+ idField + '"/>').css({'width': '90%'});
            editableText.val(aboutText);
            $('#'+ idField).replaceWith(editableText);
            editableText.focus();
            editableText.keyup(function() {
                editableText.css({'backgroundColor': 'white'});
                $('.btn').show()
                editableText.after(btnAccept,btnReject);
            });
            btnAccept.click(function(){
                let viewavleText = $('<p id='+ '"' + idField + '"' +'>');
                if(idField === 'person_name'){
                    viewavleText = $('<h1 id='+ '"' + idField + '"' +'>');
                }
                $('.btn').hide()
                let text = $('.edit_' + idField).val();
                viewavleText.html(text);
                aboutText = text
                $('.edit_' + idField).replaceWith(viewavleText);
                $(viewavleText).click(paraClicked);
            })
            btnReject.click(function(){
                let viewavleText = $('<p id='+ '"' + idField + '"' +'>');
                if(idField === 'person_name'){
                    viewavleText = $('<h1 id='+ '"' + idField + '"' +'>');
                }
                $('.btn').hide()
                viewavleText.html(aboutText);
                $('.edit_' + idField).replaceWith(viewavleText);
                $(viewavleText).click(paraClicked);
            })
        }
    
        function skillAddingHandler() {
            let idField = $(this).attr("id")
            let selectedLevel = $('.select_level')
            selectedLevel.addClass('visible')
            $('#skill_adding').addClass('invisible')
            $('.btn').show()
            let typeSkill = $('<input placeholder="Add skills" class="edit_'+ idField + '"/>').css({'width': '50%'});
            $('.edit_skill').append(typeSkill)
            typeSkill.after(btnAccept);
            let editList = $(".editable li")
            if(editList){
                editList.mouseenter(function(){
                    $(this).append("<span class='del_skill'>x</span>"); 
               }).mouseleave(function(){
                   $('.del_skill').remove();
               });
            }
            let addNewSkillbtn = $('.edit_skill .btnAccept')
            let newSkill = typeSkill.val()
            typeSkill.keyup(function() {
                newSkill = $(this).val()
            });
            addNewSkillbtn.click(function(){
                console.log(newSkill);
                if(newSkill != ''){
                    let selectedVal = selectedLevel.val()
                    selectedLevel.on('change', function() {
                        selectedVal = this.value
                    });
                    let newAdded = $('<li class="' + selectedVal + '"/>')
                    newAdded.html(newSkill)
                    $('.skills_list').append(newAdded)
                }
                $('#skill_adding').removeClass('invisible')
                typeSkill.remove()
                newSkill = ''
                selectedLevel.removeClass('visible')
                $('#skill_adding').removeClass('invisible')
                $('.btn').hide()  
            })
        }
        $('#person_name').click(paraClicked);
        $('#city_name').click(paraClicked);
        $('#lang_name').click(paraClicked);
        $('#skill_adding').click(skillAddingHandler);

        $(".editable li").mouseenter(function(){
            $(this).append("<span class='del_skill'>x</span>"); 
        }).mouseleave(function(){
        $('.del_skill').remove();
        });

        $(document).on('click','.del_skill', function () {
            $(this).closest("li").remove();
        });

        $(document).on('mouseenter','.editable li', function () {
            $(this).append("<span class='del_skill'>x</span>"); 
        });
        $(document).on('mouseleave','.editable li', function () {
            $('.del_skill').remove();
        });
});


