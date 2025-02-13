<script lang="ts">
    import { enhance } from "$app/forms";
</script>

<form method="POST" use:enhance enctype="multipart/form-data">
    <label for="file">Upload</label>
    <input type="file" id="file" name="file" class="bg-zinc-100">
    <input type="submit" class="bg-blue-200">
</form>
