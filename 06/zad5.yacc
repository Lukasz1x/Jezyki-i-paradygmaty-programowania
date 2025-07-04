%{
#include <stdio.h>
int yylex();
int yyerror (char *msg);
%}

%token NAME NUMBER

%%
statement:	NAME '=' expression		{ printf("pretending to assign %s the value %d\n", $1, $3); }
	;
	|	expression			{ printf("= %d\n", $1); }
	;
expression:	
		NUMBER			{ $$ = $1;
						printf ("Recognized a number.\n");
						}
	|   expression expression '+'	{ $$ = $1 + $2;
										printf ("Recognized '+' expression.\n");
									}
	|	expression expression '-' 	{ $$ = $1 - $2;
										printf ("Recognized '-' expression.\n");
									}
	|	expression expression '*' 	{ $$ = $1 * $2;
										printf ("Recognized '*' expression.\n");
									}
	|	expression expression '/' 	{ if ($2 == 0)
									{	
										yyerror ("divide by zero");
										YYABORT;
									}
									else
										$$ = $1 / $2;
										printf ("Recognized '/' expression.\n");
									}
	;
%%
int main (void) {
	return yyparse();
	}

/* Added because panther doesn't have liby.a installed. */
int yyerror (char *msg) {
	return fprintf (stderr, "YACC: %s\n", msg);
	}
