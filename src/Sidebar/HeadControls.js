import React from 'react';

export default (props) => (
	<div id="head-controls">
		<div class="buttons">
			<div>
				<button class="blue plain-button fas fa-plus" onClick={props.newTemplate} title="Create new template"></button>
				<button class="plain-button fas fa-arrows-alt-h" onClick={props.sendMessage('togglePosition')}
					title="Toggle sidebar position"></button>
				<button disabled={props.jsDisabled === null}
					class={[props.jsDisabled === null ? 'unknown' : (props.jsDisabled ? 'disabled' : 'enabled')]}
					onClick={props.sendMessage('toggleJs')}
					class="plain-button fas fa-code js"
					title="Toggle JavaScript"></button>
				<button class="plain-button fas fa-list" onClick={props.openTemplatesView} title="Show all archived templates"></button>
				<button class="plain-button fas fa-pencil-alt" onClick={props.openJsonEditor} title="Edit template as JSON"></button>
				<button class="plain-button far fa-clone" disabled={!props.templates[props.template.id]} onClick={props.cloneCurrentTemplate}
					title="Clone current template"></button>
				<button class="plain-button fas fa-fast-backward" onClick={props.revertTemplate} title="Undo all modifications" disabled={!props.stashedTemplate || !props.templateEdited}></button>
			</div>
			<button class="conf plain-button fas fa-cog" title="Options/Info" onClick={props.confView = true}></button>
			<button class="red plain-button fas fa-times" onClick={props.sendMessage('close')}></button>
		</div>
		<div class="title">
			<label for="template-title" class="left">Template: </label>
			<input class="template-title" id="template-title" onChange={props.onTemplateTitleInput} value={props.template.title}/>
		</div>
  </div>
);
