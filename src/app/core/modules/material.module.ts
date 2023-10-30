import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule, MAT_TOOLTIP_DEFAULT_OPTIONS, MatTooltipDefaultOptions } from '@angular/material/tooltip';
import { MatPaginatorModule } from '@angular/material/paginator';
/** List of components from Material Design */
const components = [
	MatCardModule,
	MatButtonModule,
	MatToolbarModule,
	MatIconModule,
	MatTableModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatCheckboxModule,
	MatDatepickerModule,
	MatNativeDateModule,
	MatRadioModule,
	MatTabsModule,
	MatDividerModule,
	MatMenuModule,
	MatSnackBarModule,
	MatStepperModule,
	MatListModule,
	MatSlideToggleModule,
	MatSidenavModule,
	MatDialogModule,
	MatAutocompleteModule,
	MatGridListModule,
	MatProgressBarModule,
	MatButtonToggleModule,
	MatTooltipModule,
	MatPaginatorModule
]


/**
 * NgModule that includes all Material modules.
*/
@NgModule({
	imports: [
		CommonModule,
		...components
	],
	exports: [
		CommonModule,
		...components
	],
	providers: [
		MatDialogModule,
		{ // configuracion global para tooltips
			provide: MAT_TOOLTIP_DEFAULT_OPTIONS,
			useValue: {
				showDelay: 700,
			} as MatTooltipDefaultOptions,
		},
		{
			provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
			useValue: { appearance: 'outline' } as MatFormFieldDefaultOptions
		}
	]
})
export class MaterialModule { }