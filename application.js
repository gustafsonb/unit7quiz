function checkform ( form )
{
  
  if (form.exclamation.value == "") {
    alert( "Please enter an exclamation." );
    form.exclamation.focus();
    return false ;
  }
  if (form.adverb.value == "") {
    alert( "Please enter an adverb." );
    form.adverb.focus();
    return false ;
  }
  if (form.verb.value == "") {
    alert( "Please enter an verb." );
    form.verb.focus();
    return false ;
  }
  if (form.noun.value == "") {
    alert( "Please enter an noun." );
    form.noun.focus();
    return false ;
  }
  if (form.adjective.value == "") {
    alert( "Please enter an adjective." );
    form.adjective.focus();
    return false ;
  }
return true ;
}